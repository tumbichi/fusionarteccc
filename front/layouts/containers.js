import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const FormContainer = styled.div.attrs({
  className: 'flex flex-col bg-secondary p-8 shadow-xl rounded-lg',
})``;

export const FlexRowContainer = styled.div.attrs({
  className: 'lg:flex ',
})``;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Flex1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;

  .section-uno {
    flex: 1;
    height: 100vh;
  }

  .section-dos {
    flex: 1;
    height: 100vh;
  }
  .section-tres {
    flex: 1;
    height: 100vh;
    background-color: #00947e;
  }
  .section-cuatro {
    flex: 1;
    height: 100vh;
    background-color: #fafafa;
  }
  .section-cinco {
    flex: 1;
    height: 100vh;
    background-color: #00947e;
  }
`;
export const AdminContainerPages = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: whitesmoke;
`;
