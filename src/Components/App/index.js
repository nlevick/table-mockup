import { Helmet } from "react-helmet";

import TableMockup from "../TableMockup";
import "./style.css";

export default function App() {
  return (
    <div>
      <Helmet>
        <html lang="en_US" />
        <meta charSet="utf-8" />
        <title>My Table Mockup</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
        <meta name="msapplication-tap-highlight" content="no" />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `You are using outdated browser. You can install modern browser here:
            <a href='http://outdatedbrowser.com/'>http://outdatedbrowser.com</a>.`,
          }}
        />
      </Helmet>
      <div className="App">
        <TableMockup />
      </div>
    </div>
  );
}
