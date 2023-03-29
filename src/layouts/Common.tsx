import AppBar from "../components/Appbar";

type Props = {
  children?: React.ReactNode;
};

const CommonLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <AppBar />
      <div className="m-4">{children}</div>
    </div>
  );
};

export default CommonLayout;
