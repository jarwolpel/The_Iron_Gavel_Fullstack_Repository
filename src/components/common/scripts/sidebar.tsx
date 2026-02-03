export function showSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

export function hideSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}
export default showSidebar;



