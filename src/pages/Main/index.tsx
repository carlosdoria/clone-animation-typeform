import FirstAndSecond from '../../components/FirstAndSecond'

import * as S from './styles'

export default function Main() {
  return (
    <S.Main style={{ height: '1610vh' }}>
      {/* <Header /> */}

      <S.Section style={{ height: '72.7%' }}>
        <FirstAndSecond />
      </S.Section>

      <S.Section style={{ height: '9.7%' }}>
        <S.Sticky className="third" />
      </S.Section>

      <S.Section style={{ height: '10.1%' }}>
        <S.Sticky className="fourth" />
      </S.Section>

      {/* <Footer /> */}
    </S.Main>
  )
}
