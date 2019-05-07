import {HydrofoilShell} from '@hydrofoil/hydrofoil-shell/hydrofoil-shell'
import './views'

class PlainShellElement extends HydrofoilShell {
    async loadResourceInternal(url) {
        const response = await fetch(url)
        return await response.text()
    }
}

customElements.define('plain-shell', PlainShellElement)
