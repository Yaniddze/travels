import { FC } from "react";
import { Slider } from "../../components";

export const Sales: FC = () => (
  <Slider 
    items={[
      {name: 'Скидка 10%', description: 'Описание для акции со скидкой в 10%', image: 'http://achtung.kz/wp-content/uploads/2016/01/%D0%90%D0%BA%D1%86%D0%B8%D1%8F.jpg'},
      {name: 'Скидка 20%', description: 'Описание для акции со скидкой в 20%', image: 'http://connect-s.kz/uploads/posts/2017-09/1506000859_400x175xak_.jpg'},
      {name: 'Скидка 30%', description: 'Описание для акции со скидкой в 30%', image: 'https://lh3.googleusercontent.com/proxy/MDoPkkg-0QU0JQHgxAuUG0HV4k8BAWwxpdfdE-2o63Wjr-R57Yl_ap52QGFjPfan12uaeMAuo0fJoerkm7SmLFSYxTGTlJ-soAn2YsaYvD7c_8ARGSUKQkmV'},
      {name: 'Скидка 40%', description: 'Описание для акции со скидкой в 40%', image: 'https://lh3.googleusercontent.com/proxy/D3CZpt2qYuK30sSJ0ZjCsXoovcwftMCg-TGty5N_AZQEZV16M7NtxrTW5UoUezzRXtbqY0-sIIj_vCRosYXpnyLIna9xNAXhsXm0n1YIhKfjQV56sq0w8LaWrLc5udSkxg3SfOq4RXl0L2SskC_C'},
      {name: 'Скидка 50%', description: 'Описание для акции со скидкой в 50%', image: 'https://lh3.googleusercontent.com/proxy/G9CYttorA2ycYShATE1C_e9acMKS-Y-k2TPbcUNq94ej5KeshHAXXROoQKgbcr_SdNZZEJ916pgsJYWCxCI'},
      {name: 'Скидка 60%', description: 'Описание для акции со скидкой в 60%', image: 'https://bokaz.kz/wp-content/uploads/2017/04/sp-1.png'},
    ]}
  />
)