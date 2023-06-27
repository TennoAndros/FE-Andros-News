const Error = ({
  err: {
    response: { status, data },
  },
}) => {
  return (
    <div>
      {status} {data.msg}
    </div>
  );
};

export default Error;
