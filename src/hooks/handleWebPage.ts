import * as WebBrowser from "expo-web-browser"
import { Link } from "types"

function handleWebPage(link: Link) {
  WebBrowser.openBrowserAsync(link)
}

export default handleWebPage
