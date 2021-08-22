import './footer.css';
export default function Footer({ reports }) {
    return (
        <div id="footer">
        <footer>
            <p>{reports.length} Locations World Wide</p>
        </footer>
        </div>
    )
}
