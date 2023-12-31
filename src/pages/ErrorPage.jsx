import { Link } from "react-router-dom";

/**
 * Renders the ErrorPage component.
 * @returns {JSX.Element} The ErrorPage component.
 */
export default function ErrorPage() {
    return (
        <>
            <section className="error-page">
                <div>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </section>
        </>
    );
}
