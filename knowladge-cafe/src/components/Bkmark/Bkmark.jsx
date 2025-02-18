import PropTypes from "prop-types";

const Bkmark = ({bookmark}) => {
    return (
        <div className="border-2 m-2">
            <h1>{bookmark.title}</h1>
        </div>
    );
};

Bkmark.propTypes={
    bookmark: PropTypes.object.isRequired
}
export default Bkmark;