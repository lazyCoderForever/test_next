import MyWonderfulComponent from "../components/MyWonderfulComponent";

export default function Page({ id, options, count, color, data, logging }) {
  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      count={count}
      color={color}
      data={data}
      logging={logging}
    >
      I'm text from a component
    </MyWonderfulComponent>
  );
}
Page.getInitialProps = ctx => {
  const id = 21,
    count = 0,
    color = "red",
    data = "data",
    logging = "Hello from SSR",
    options = {
      params: {
        fields: {
          isDynamic: true,
        },
      },
    };
  console.log(logging);
  return {
    id,
    options,
    count,
    color,
    data,
    logging,
  };
};
