import { Amplify, Analytics } from "aws-amplify";
import { useEffect } from "react";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports });

export default function StaticPage() {
  useEffect(() => {
    const recordAnalytics = async () => {
      await Analytics.record({ name: "viewStaticPage" });
    };

    recordAnalytics().catch(console.error);
  }, []);
  return <div data-test="content">This is a static page</div>;
}
