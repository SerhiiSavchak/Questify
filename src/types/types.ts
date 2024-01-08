export type ContainerProps = {
  children: React.ReactElement;
};

export type HeaderProps = {
  children: React.ReactElement;
};

export type PublicRouteProps = {
  component: React.ComponentType;
  redirectedTo: string;
};

export type PrivateRouteProps = {
  component: React.ComponentType;
  redirectedTo: string;
};
