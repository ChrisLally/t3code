import { useEffect } from "react";

import { getWsRpcClient } from "../runtime/wsRpcClient";
import { startServerStateSync } from "./serverState";

export function ServerStateBootstrap() {
  useEffect(() => startServerStateSync(getWsRpcClient().server), []);

  return null;
}
