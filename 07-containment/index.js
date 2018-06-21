
// If we need other elements but don't know how many yet, we can add an expression below, `{props.children}` and anything inside of the `<FancyBorder />` instance will be rendered.
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}


// The `<h1>` and `<p>` tags will be rendered as children
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

