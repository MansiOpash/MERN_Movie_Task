import React, { useEffect, useState } from "react";
import axios from "axios";
import Series from "./Series";
import ReactPaginate from "react-paginate";
import "../../style/page.scss";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Toolbar, alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#bbdefb",
  position: "relative",
  justifycontent: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SeriesItem() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const PER_PAGE = 5;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [lists, setList] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:8000/getalldata`);
      const data = response.data;
      console.log("Api Dattatatatatatata", data);
      const Items = data;

      if (!Items) {
        setError(true);
      } else {
        setError(false);
      }

      const filteredItems = Items.filter(
        (i) => i.releaseYear >= 2010 && i.programType === "series"
      );

      const nameAscendingSeries = filteredItems
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 21);

      const delay = setTimeout(() => {
        setList(nameAscendingSeries);
        setIsLoading(false);
        setData(nameAscendingSeries);
      }, 1000);
      return () => clearTimeout(delay);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError(true);
      setIsLoading(false);
    }
  };

  function handlePageClick({ selected: selectedpage }) {
    setCurrentPage(selectedpage);
  }

  const offset = currentPage * PER_PAGE;

  const CurrentPageData = (products.length > 0 ? products : lists)
    .slice(offset, offset + PER_PAGE)
    .map((item, index) => (
      <Series
        titlename={item.title}
        key={index}
        url={item.images[0].PosterArt[0].url}
      />
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      try {
        const response = await axios.get(`http://localhost:8000/search/${key}`);
        const data = response.data;

        if (data) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.log("Error searching:", error);
        setError(true);
      }
    } else {
      setProducts([]);
    }
  };

  return (
    <>
      <div className="hero">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => searchHandle(e)}
            />
          </Search>
        </Toolbar>

        {/* ------------------------------------------------------ */}
        <div className="cont-box">
          {!isLoading ? (
            <div className="container_main_box">
              <div className="main_box">{CurrentPageData}</div>
              <div className="page">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </div>
            </div>
          ) : (
            <p className="info">Loading...!</p>
          )}
          {isError && <p className="info">Something Went Wrong...!</p>}
        </div>
      </div>
    </>
  );
}

export default SeriesItem;
