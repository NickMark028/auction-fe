import { Footer, Header } from "components";
import WatchLaterBody from "components/watch-later-body";
import { FC } from "react";

interface Props {}

const WatchLaterPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Header />
      <WatchLaterBody />
      <Footer />
    </>
  );
};

export default WatchLaterPage;
