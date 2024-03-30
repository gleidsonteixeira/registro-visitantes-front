import { QueryClientProvider } from "react-query";
import { Paths } from "./routes";

import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import { queryClient } from "./services";


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
    </>
  );
}

export default App;