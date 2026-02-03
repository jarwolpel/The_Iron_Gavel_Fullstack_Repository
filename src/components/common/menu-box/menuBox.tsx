// This module will be the base for menu box components
import "./MenuBox.css"

interface MenuProps {
    children?: React.ReactNode
}

export function MenuBox({ children }: MenuProps) {
    return(
        <div className="MenuBox">
            {children}
        </div>
    )
}