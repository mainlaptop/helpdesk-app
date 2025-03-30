// utils
import { Rating, styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledRating = styled(Rating)`
  gap: 15px;

  .MuiRating-iconFilled,
  .MuiRating-iconEmpty {
    background: transparent;
    width: 18px;
    height: 18px;
    color: var(--yellow);
  }
`;

const RatingStars = ({ rating = 0, readOnly = true, ...props }) => {
  return (
    <StyledRating
      readOnly={readOnly}
      value={rating}
      precision={0.5}
      emptyIcon={<StarEmpty />}
      icon={<StarFilled />}
      {...props}
    />
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number,
  readOnly: PropTypes.bool,
};

export default RatingStars;
