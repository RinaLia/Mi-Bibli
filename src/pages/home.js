import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import TopNav from "./topNav";
import book from "../asset/img/book.jpg";
import { connect } from "react-redux";
import { getBook } from "../store/actions/book";
import { logout } from "../store/actions/auth";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBook: [],
    };
  }

  logoutAuth = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  fetchBook = async () => {
    await this.props.getBook();
    const { dataBook } = this.props.book;
    // await getBook();
    console.log("dataBook", dataBook);
    // console.log("this.props.book", this.props.book);

    // this.setState({ dataBook });
  };

  componentDidMount() {
    this.fetchBook();
  }

  render() {
    return (
      <>
        <TopNav logOut={this.logoutAuth} />
        <div className="home">
          <div className="bg-home">
            <div className="w-100 cover-content img-fluid"></div>
          </div>
        </div>
        <Row className="w-100 d-flex justify-content-center">
          {this.state.dataBook.map((lis_book) => (
            <div className="card-book">
              <img
                style={{ width: 130, height: 180 }}
                src={lis_book.image}
                alt="card-book"
              />
              <div className="title mt-2 text-center font-weight-bold">
                <p>{lis_book.book_title} </p>
              </div>
            </div>
          ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
});
const mapDispatchToProps = { getBook, logout };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
