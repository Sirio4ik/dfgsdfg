import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Oval
      height={60}
      width={60}
      color="#1e5f95"
      wrapperStyle={{ justifyContent: 'center', margin: '40px 0px' }}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#d0d7dd"
      strokeWidth={8}
      strokeWidthSecondary={8}
    />
  );
};

export default Loading;
