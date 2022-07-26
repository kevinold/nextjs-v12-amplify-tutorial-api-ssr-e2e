import { Analytics } from "aws-amplify";
import { useEffect } from "react";
import awsExports from "/../src/aws-exports";

Amplify.configure({ ...awsExports });

export default function StaticPage() {
  useEffect(() => {
    Analytics.record({ name: "viewStaticPage" });
  }, []);
  return <div data-test="content">This is a static page</div>;
}
