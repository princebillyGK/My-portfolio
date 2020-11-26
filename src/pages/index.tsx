import * as React from 'react'
import '../styles/styles.scss'
import Header from '../components/Header'
import AnimatedLogo from "../components/AnimatedLogo"
import { useSpring } from "react-spring"
import { useCallback } from "react"

export default () => {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])

  return (
    <div onMouseMove={onMove}>
      <Header/>
      <button className="contact-button">
        <AnimatedLogo className="animated-logo" st={st} xy={xy} />
      </button>
      <main className="main-content">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque dicta harum id laudantium
          veritatis. Aperiam dolorem doloremque, doloribus ea iste laboriosam laborum minus necessitatibus nisi nostrum
          officia perspiciatis rem saepe sed soluta voluptas voluptatem voluptates voluptatum. Ducimus ipsum nobis quasi
          quibusdam sed sint! Accusamus ad adipisci alias aperiam consequatur culpa cupiditate deserunt distinctio
          dolore dolorem doloribus earum, esse explicabo hic illum ipsam libero magnam magni minima molestiae mollitia
          natus nihil non officia provident quae qui quibusdam recusandae saepe sit soluta ullam voluptatem voluptatum.
          Aliquid amet beatae nemo neque nostrum odio officia quae ratione sint! Aliquam amet optio quam ratione.</h1>
        <h1>A aliquid animi aperiam corporis culpa, cumque cupiditate deserunt dicta ducimus eius ex excepturi fugiat
          maiores minus mollitia natus nisi nobis nulla obcaecati officia quibusdam quidem quos reprehenderit sint
          tempora vero vitae. Adipisci aliquam aliquid, architecto atque beatae doloremque illum laudantium possimus
          quos reiciendis rem repellendus sint veritatis! A, accusantium adipisci dolore ea enim harum laborum maxime
          necessitatibus nostrum odit provident quas quos rerum sint, voluptas! At consequatur consequuntur dolore
          fugit, laboriosam natus ut veritatis! Aspernatur, at dicta dolor eos harum iure labore magnam nihil tenetur
          voluptatem? Asperiores debitis expedita quae repellat voluptas. Corporis explicabo necessitatibus nobis quae,
          rem sunt!</h1><h1>Ab ad aliquid dolore doloribus dolorum eius error est eum eveniet ex expedita facilis id
        impedit in ipsum iste itaque labore laboriosam maxime modi necessitatibus nemo odit officiis optio perferendis
        quae quasi quidem quo, rem repellendus sed soluta totam voluptate! Consequuntur debitis doloribus eaque,
        eligendi exercitationem incidunt laboriosam officiis! Architecto commodi iusto non officia qui quia repellat
        sint ullam. Amet deserunt ducimus eligendi facilis illum in itaque, maxime molestiae, obcaecati porro, quas
        quidem quos reiciendis. Ex harum illum molestias praesentium ut. Accusantium cum dignissimos explicabo inventore
        sit! Accusantium culpa dolorem error exercitationem iste neque nostrum quaerat quo sit velit! Aliquid.</h1>
        <h1>Eos error omnis quaerat. Accusantium aliquam aliquid cumque deserunt dolore est, exercitationem hic, illo
          iste maiores nisi numquam porro quasi qui recusandae repellat saepe sit tenetur velit, voluptatem? Aliquid
          amet asperiores consequatur eveniet excepturi impedit labore laudantium magni molestiae molestias natus nemo
          odio, pariatur, quibusdam ratione repudiandae rerum sapiente tenetur, totam unde? Delectus deserunt, dicta
          fuga minus modi molestias nostrum quam qui ratione repellendus tempora tempore voluptatem voluptatum. A ipsum
          necessitatibus nemo reiciendis voluptas! Aspernatur atque consequatur dicta, dolorem exercitationem illum,
          incidunt ipsum labore minus molestias quasi quia quis quo vitae voluptates. Delectus fugit, necessitatibus
          optio pariatur quaerat quas voluptatem?</h1><h1>Ab accusantium assumenda atque cumque dolore doloremque
        dolorum ea earum est fugiat hic labore laboriosam modi molestias nihil non numquam odit officiis porro quasi rem
        repellat, repellendus ullam unde voluptatem. Consequuntur culpa cum cupiditate delectus dolore, dolorem dolorum,
        eius eos et facilis id ipsum itaque natus neque nobis pariatur perspiciatis quo quod ratione recusandae sed, ut
        veritatis voluptatem. Dignissimos error necessitatibus neque non perspiciatis recusandae? Cumque debitis earum
        expedita ipsam labore magnam minus odio qui rerum velit. Aliquid aut cupiditate doloremque eveniet
        exercitationem expedita ipsam itaque labore necessitatibus nesciunt nisi nulla, optio porro quia rem sit soluta
        totam veritatis vitae!</h1><h1>At commodi consequatur distinctio dolorum est, facere ipsum maxime molestias
        necessitatibus omnis quam, quasi repellat veniam? Atque dolore eligendi magnam maiores maxime qui. Delectus
        eaque eveniet excepturi exercitationem iure laborum maiores nihil quisquam repellat tempora? Ab laudantium
        magnam odit perferendis quam repellendus vero! Accusamus ad aut consequuntur culpa, doloremque ducimus eum in
        iure laborum maiores neque officia officiis quaerat, quasi quidem recusandae suscipit tempora vel? Alias aperiam
        cumque deserunt ducimus ex inventore iusto nostrum, obcaecati odio, rem similique voluptate voluptatibus. Amet
        commodi debitis ipsam, nisi nostrum sed veritatis. Ab aperiam blanditiis deleniti dolor, eos ipsum molestiae
        quisquam quod repudiandae suscipit!</h1><h1>Aliquid aut debitis earum, facilis ipsa itaque maiores minima odio
        quidem ratione! Aliquam aspernatur, consectetur, corporis delectus excepturi explicabo facere inventore iste
        itaque, nobis omnis quae quaerat tempore vel voluptatem! Accusantium consequatur dicta ea esse et excepturi
        fugit neque odit optio perspiciatis possimus quibusdam quo repellat sit sunt, tempore ut? Accusantium aspernatur
        cum deserunt dolorum libero minus mollitia rem reprehenderit saepe sed, unde voluptas? Animi architecto,
        aspernatur assumenda beatae commodi, deleniti dolores eos et explicabo fuga impedit ipsum iure laudantium minus
        molestiae neque nostrum odit optio quae rem reprehenderit rerum veritatis! Aliquid dignissimos expedita
        inventore quam quibusdam quis ratione unde.</h1><h1>A aliquid aperiam architecto, corporis cumque debitis
        deserunt eaque, et ex explicabo maiores nulla omnis, pariatur quae quos ratione rem repudiandae vitae voluptates
        voluptatum. Corporis hic laudantium repudiandae rerum sequi tempora ut vel! Asperiores beatae consectetur
        consequatur cupiditate debitis dicta distinctio dolorem, earum excepturi iure laudantium quis quo sed sint sunt
        unde voluptatem, voluptatum. Consequuntur delectus doloribus fugiat, fugit mollitia odio pariatur voluptatum. Ab
        deleniti earum voluptate. Ab architecto atque, commodi consequatur cupiditate deserunt enim excepturi, expedita
        illo laboriosam possimus rem tempora vitae? Distinctio eius fuga, impedit labore libero neque quidem,
        repellendus rerum soluta tempora vero, vitae voluptas? Eos, pariatur.</h1><h1>Ab accusantium aliquam assumenda,
        beatae id ipsa necessitatibus officiis perferendis perspiciatis, quis quisquam unde vel vero. Animi at autem
        consequuntur cum dolore dolorem ea eligendi eveniet exercitationem illo laborum laudantium modi mollitia nam
        nemo numquam odio perspiciatis provident quasi quia quo ratione recusandae rem repellendus sed temporibus,
        velit! Architecto, error eum, iste itaque molestias numquam possimus quisquam quos ratione reiciendis
        reprehenderit sunt velit. Aspernatur aut consectetur, delectus, dicta dolores eligendi esse facere fuga laborum
        maxime molestiae molestias neque odio omnis pariatur provident ratione recusandae reiciendis repellat saepe sed
        sequi tempora vel vero voluptas, voluptatem voluptates voluptatibus. Iste rerum unde voluptates.</h1><h1>Eius et
        laborum pariatur porro quidem quo voluptate. Aliquam, animi architecto atque beatae cum debitis deserunt dicta,
        dignissimos dolorem esse est expedita explicabo facere fuga illum in ipsa itaque minus modi, mollitia quae quasi
        quibusdam quidem quisquam repellat rerum suscipit veritatis. Consectetur culpa cum cupiditate deserunt
        dignissimos dolore dolorem doloremque eaque et iure laudantium maxime nam nostrum numquam omnis optio quae quos
        recusandae repellat similique soluta tempore, veritatis? Architecto asperiores beatae enim ex excepturi fugiat
        harum labore laborum maiores obcaecati, officia officiis porro qui quibusdam, repellendus sequi sint vero
        voluptas voluptate voluptates. Doloremque, expedita odio officia perferendis placeat quia sint!</h1><h1>Ad,
        consequatur deleniti, dignissimos ea et, ex excepturi expedita illum incidunt itaque laboriosam molestias nemo
        qui quo reprehenderit repudiandae voluptate. Libero nobis voluptatem voluptatum. Aliquid consectetur doloribus
        eos esse expedita harum, hic illo in nihil, non obcaecati quas quidem quis ratione similique sit veniam. Ab
        adipisci amet beatae, culpa distinctio error, esse est explicabo fugiat ipsa magni minima natus necessitatibus,
        nostrum omnis quos repellendus. A ab at atque aut consequatur culpa cumque debitis delectus deserunt doloremque
        enim est expedita fugit ipsa magni maiores maxime, necessitatibus nihil nisi non perferendis placeat porro
        quisquam quod quos ratione sunt suscipit tempora voluptates voluptatibus?</h1><h1>Ad culpa cupiditate hic totam
        ut? Dolorum expedita facere fugiat minus nobis quis repudiandae ullam vel? Nesciunt nostrum numquam, qui quo
        quod sed similique! Ab debitis ducimus ea eligendi error fugit illum impedit inventore ipsam modi necessitatibus
        praesentium quas quisquam, quod vero vitae voluptate? Ab accusantium alias commodi consequuntur cupiditate
        delectus ea eligendi impedit ipsa laudantium libero magnam, minus molestias mollitia natus necessitatibus non
        nostrum obcaecati odio placeat quibusdam, quisquam quos reiciendis sapiente sit sunt voluptates. Alias aliquid
        consectetur corporis delectus id, in ipsa iusto, modi quae quasi quis quo repellendus reprehenderit, rerum
        soluta vel vitae voluptatibus! Aliquid, ratione, veritatis?</h1><h1>Alias, beatae cupiditate deleniti dolores ea
        eaque exercitationem fugit harum laboriosam magni maiores non nulla optio, reprehenderit ullam. Asperiores
        blanditiis deleniti fugit mollitia. A eaque explicabo necessitatibus non numquam suscipit, veritatis. Accusamus
        ad architecto atque autem beatae consequuntur corporis culpa cum delectus distinctio dolorem dolores ducimus eos
        esse eveniet harum id impedit ipsa magnam, magni molestias nisi nulla placeat porro quaerat quisquam ratione rem
        repellat repudiandae rerum sapiente sequi temporibus totam veniam voluptate voluptates voluptatum. Dolores est
        ex labore perferendis tenetur vero! Ab cum deleniti doloribus mollitia nobis, quaerat sunt totam? Blanditiis
        enim natus nihil odio officia sed voluptas voluptates!</h1><h1>Accusamus, alias enim praesentium qui quibusdam
        quod vitae. Adipisci delectus dolorum enim expedita molestiae nemo, nostrum perferendis perspiciatis rerum sunt?
        Architecto at cum doloribus, necessitatibus nesciunt nisi, placeat quisquam repudiandae rerum saepe sint
        suscipit veritatis voluptas voluptate voluptates. Aliquid autem corporis dignissimos dolor harum hic ipsam
        laudantium libero magnam nam omnis quae quasi recusandae sunt, tempore temporibus vel velit veniam! Atque
        corporis deleniti deserunt dolor dolorum eligendi harum, libero minus nisi non nulla, obcaecati quae quasi quod,
        repudiandae sunt vel voluptate. Accusantium cumque dolorum ducimus eos explicabo impedit molestias mollitia
        natus necessitatibus perferendis placeat quam saepe, soluta ullam vitae voluptates!</h1><h1>Ab aliquam assumenda
        debitis doloremque id itaque laboriosam, libero maxime minus modi obcaecati quas quo quos reiciendis sit,
        tempore ullam vel velit? Commodi consectetur corporis culpa cupiditate debitis deserunt dolore earum est facere
        ipsum magnam maxime minus modi optio porro quam quia quibusdam quidem recusandae reiciendis repudiandae saepe
        sapiente velit veritatis, voluptas voluptate voluptatem? Fuga maiores pariatur qui. Amet deleniti ea, explicabo
        fugiat ipsam ipsum iure maxime natus numquam tempore. Aliquid blanditiis fuga id minus nemo, praesentium quas
        tempore temporibus. Accusantium consequatur modi nemo quaerat recusandae ullam ut voluptatem. Accusantium culpa
        et labore nostrum similique! In non quos voluptas voluptatem.</h1><h1>Assumenda aut debitis ea eius laboriosam
        maiores, mollitia natus pariatur tempore veritatis. Consectetur consequatur delectus, enim iure magni modi
        quidem soluta voluptatibus. At deleniti enim hic iure magnam molestias quo voluptatum. Accusamus amet aspernatur
        corporis cum enim hic itaque labore laboriosam, neque officiis optio, quaerat saepe sunt. Ab ad blanditiis
        deleniti dicta dignissimos in iure iusto maiores, molestiae mollitia nesciunt nobis non nostrum odio officia
        placeat porro quasi quia, quod, quos ratione voluptas voluptates! Adipisci magni molestias quod? Cumque
        distinctio doloribus inventore iusto quae. Ad consequuntur culpa eveniet illo laboriosam maiores, nam nihil nisi
        perferendis, repellendus sapiente temporibus velit voluptates!</h1><h1>Autem dicta error impedit laudantium,
        ratione rem tempore? Ab aspernatur, commodi eaque error fuga inventore natus recusandae tempore vel velit!
        Aperiam, aspernatur blanditiis commodi dolorem enim ipsa ipsam iusto libero mollitia, non odio provident quidem
        sequi! Deserunt doloribus, natus saepe sunt voluptatem voluptatibus? Amet architecto blanditiis natus sed
        voluptatum? A accusamus aliquid aperiam at atque dolores ea earum, error excepturi facilis ipsum laboriosam
        libero magnam magni nam natus nobis nostrum nulla optio provident quaerat recusandae repellat reprehenderit
        rerum sint sit temporibus velit. A deleniti doloremque ducimus facere fuga illo ipsa laudantium maxime neque
        nulla, pariatur, perferendis quo sint ullam veniam!</h1><h1>Dolore doloremque ipsa iure laudantium officia optio
        porro, quam, ratione reiciendis rerum saepe suscipit! Accusantium vero voluptas voluptatem. Accusamus amet
        aperiam aspernatur blanditiis commodi consequuntur culpa deleniti dicta dolorem ea enim excepturi exercitationem
        illo illum iste libero magni, minus necessitatibus nobis nulla, officia porro quia reiciendis rem repellendus
        repudiandae sed tempore ut voluptate, voluptatibus. Accusantium adipisci eligendi exercitationem id iure natus,
        nihil quidem quos reiciendis repellat repudiandae tempora ullam. Aut consectetur debitis deleniti dolorum eaque
        earum eius, et fugiat fugit, hic, itaque iusto laudantium molestiae mollitia natus necessitatibus nemo neque
        obcaecati odio quis repudiandae similique suscipit tempora tempore tenetur. Illum!</h1><h1>Dolorem eligendi
        molestiae rem. Ad aliquid aut cupiditate ipsa necessitatibus numquam quod saepe voluptatem. A architecto
        aspernatur consequuntur cumque expedita facilis nostrum quasi. Aliquam animi aspernatur autem blanditiis
        consequatur culpa deserunt dolorem dolorum, esse eveniet excepturi ipsum labore maxime officia pariatur quam
        quidem quod rerum similique voluptate! Deleniti dicta doloremque molestiae molestias mollitia, nam nulla
        similique? Aliquam cumque harum iure iusto voluptas? Eius eligendi, facere harum inventore ipsam, labore, libero
        quaerat qui quod sequi tempore totam! Architecto dolores et maxime molestiae neque nihil numquam omnis, optio
        perferendis quo reprehenderit tempora tempore. Atque cum enim excepturi in necessitatibus nobis quia.
        Cumque.</h1><h1>Accusamus adipisci aliquam distinctio doloribus eius eligendi, ex explicabo fuga inventore ipsa
        maiores molestiae nisi non nulla omnis perferendis perspiciatis placeat porro quod quos reiciendis sit, tempora,
        totam vel voluptas! Ab accusantium architecto aspernatur consequuntur cumque, delectus deleniti dolore dolores
        doloribus enim error est eveniet facere fugiat id impedit in ipsam itaque laboriosam, magni molestiae natus
        necessitatibus nemo neque nisi nulla optio pariatur perspiciatis possimus quaerat quasi quia quis repudiandae
        sint temporibus veritatis voluptates. Dolorem eius necessitatibus possimus sit veniam. Autem distinctio error
        nemo non vero? Aperiam maiores, minus! Debitis dolores iure libero maiores nesciunt numquam quam quis ullam,
        voluptatibus.</h1>
      </main>
    </div>
  )
}