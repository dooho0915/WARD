import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;
const StyledImage = styled.Image`
  
  width: 125px;
  height: 100px;
  border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;


const Image = ({ url, imageStyle }) => {
  
  return(
      <Container>
          <StyledImage source ={{uri:url}} style={imageStyle} />
      </Container>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  imageStyle: PropTypes.object,
};

export default Image;