type ContentWrapProps = {
  children: React.ReactNode;
};

export const ContentWrap = ({ children }: ContentWrapProps) => {
  return (
    <div className="flex w-full justify-center p-6">
      <div className="w-full max-w-5xl">{children}</div>{" "}
    </div>
  );
};
