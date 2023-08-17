import { Layout, Typography } from "antd"
import { Content } from "antd/es/layout/layout"

export const Feed = () => {
    return (
        <Content style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#202024' }}>
            <h1>Flamengo</h1>
            <img
                src="https://s2-ge.glbimg.com/DU2QT0rxHWZYtgceGWQ2w_eHiGU=/0x0:1080x608/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/m/L/gaZSANRRAsPEPVXKn05w/carrossel-sobe-desce-flamengo-2023.jpg"
                width={400}
                height={400}
            />
            <p>Será que nossos jogadores vão parar de se socar</p>
        </Content>
    )
}