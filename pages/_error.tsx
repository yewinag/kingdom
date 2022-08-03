interface Iprops {
  statusCode: number;
}
function Error(props: Iprops) {
  return (
    <main className="flex w-full max-h-screen p-4 lg:px-6 xl:px-20">
      <div className="flex flex-col items-center m-auto">
        {props.statusCode ? (
          `An error ${props.statusCode} occurred on server`
        ) : (
          <>
            <h1 className="text-8xl">500</h1>
            <h3 className="text-7xl">ဆာဗာ မှာ ကွိုင်တက်ကုန်ပြီဗျ</h3>
          </>
        )}
      </div>
    </main>
  );
}
export default Error;
