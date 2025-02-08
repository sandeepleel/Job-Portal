declare module "sal.js" {
  interface SalOptions {
    threshold?: number;
    once?: boolean;
    disable?: boolean;
  }

  const sal: {
    init: (options?: SalOptions) => void;
  };

  export default sal;
}
