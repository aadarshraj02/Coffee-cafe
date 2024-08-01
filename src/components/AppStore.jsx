const backgroundStyle = {
  backgroundImage: "url('/website/coffee-beans-bg.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <h1>Coffee Cafe is available for Android and IOS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
