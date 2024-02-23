import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./src/router"

export const CalendarApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
