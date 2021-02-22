const withPrice = (Component) => {
  const NewPrice = ({ price, ...props }) => {
    //Example call an external service

    // https://appmakers.dev/bcp-47-language-codes-list/
    const newPrice = new Intl.NumberFormat('el-GR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price * 100);

    return <Component {...props} price={newPrice} />;
  };
  return NewPrice;
};

export default withPrice;
