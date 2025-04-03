declare module "*.svg" {
    import React from "react";
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export { ReactComponent };
    export default src;
}
