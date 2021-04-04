import './Content.scss';
import { planets } from '../../database/plants';

export default function Content(props: { index: number }) {
    return (
        <article id="content">
            <h1>{planets[props.index].content.name}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: planets[props.index].content.description }}></div>

            <div className="info">
                {
                    planets[props.index].content.info.map((info) =>
                        <div className="item">
                            <h3>{info.title}</h3>
                            <p>
                                {info.value}
                                {
                                    info.suffix ? <span dangerouslySetInnerHTML={{ __html: info.suffix }}></span> : null
                                }
                            </p>
                        </div>)
                }
            </div>
        </article>
    )
}