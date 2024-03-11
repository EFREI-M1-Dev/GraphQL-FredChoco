import { GhibliAPI } from "./datasources/GhibliAPI"

export type DataSourceContext = {
  dataSources: {
    ghibliAPI: GhibliAPI
  }
}