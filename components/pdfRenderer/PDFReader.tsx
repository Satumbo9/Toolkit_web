"use client";

import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    borderRadius: "12px",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  viewerSize: {
    width: "80%",
    height: "100vh",
  },
});

const PDFDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          {`Micamp Solutions, ${new Date().getFullYear()}`}
        </Text>
        <Text style={styles.title}>The Songbird and the Silver Knight</Text>
        <Text style={styles.author}>Pirmohammed Kunzlerdorf</Text>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image style={styles.image} src="/images/A-woman-and-a-knight.png" />
        <Text style={styles.subtitle}>
          Chapter 0: A woman with voice like a songbird
        </Text>
        <Text style={styles.text}>
          In a kingdom far away, nestled between lush valleys and sparkling
          seas, lived Seraphina, a young woman with a voice like a songbird. Her
          melodies echoed through the castle walls, bringing joy to the weary
          king and queen. One day, a dark shadow fell upon the land. The
          neighboring kingdom, ruled by the iron-fisted King Draken, threatened
          to invade. Fear gripped the hearts of the people, and even
          Seraphina&apos;s songs faltered. Desperate, the king sent his bravest
          knight, Sir Lysander, to negotiate peace. Sir Lysander was known for
          his unwavering courage and his shining silver armor, which shimmered
          like moonlight on water. As Sir Lysander journeyed through the
          perilous woods, he heard a melody so pure and enchanting that it
          stopped him in his tracks. He followed the sound, drawn deeper into
          the forest, until he reached a clearing where Seraphina stood, singing
          to the birds. Their eyes met, and a spark ignited. Seraphina saw not
          just a knight, but a man with a kind heart and a gentle soul. Sir
          Lysander saw not just a songstress, but a woman with a spirit as
          bright as the sun.
        </Text>
        <Text style={styles.text}>
          They spoke for hours, their conversation flowing like a river. Sir
          Lysander shared tales of his adventures, and Seraphina sang songs of
          hope and love. As the sun dipped below the horizon, they realized they
          had fallen deeply in love. But their happiness was short-lived. King
          Draken&apos;s army attacked, and Sir Lysander was called to battle. He
          promised Seraphina he would return, and rode off to face the enemy.
          The battle was fierce, but Sir Lysander fought with the strength of a
          lion. His silver armor gleamed in the sunlight, inspiring his fellow
          knights. Yet, the enemy&apos;s numbers were overwhelming, and Sir
          Lysander was struck down. News of his defeat reached Seraphina, and
          her heart shattered. But then, she remembered his courage, his love
          for their kingdom, and the promise he had made to her. Seraphina
          gathered her courage, and with a voice filled with both sorrow and
          determination, she began to sing. Her song soared through the air,
          reaching the ears of the disheartened knights. It reminded them of
          their duty, of the love they held for their land, and of the hope that
          still remained.
        </Text>
        <Text style={styles.text}>
          Inspired by Seraphina&apos;s song, the knights rallied. They fought
          with renewed vigor, their swords clashing against the enemy&apos;s.
          The tide of the battle turned, and the enemy was driven back. When Sir
          Lysander awoke, he found himself in Seraphina&apos;s arms. She had
          searched the battlefield, found him wounded but alive, and brought him
          back to the castle. Together, they healed. Sir Lysander&apos;s wounds
          mended, and Seraphina&apos;s heart found solace in his love. They
          married, their wedding a celebration of love, courage, and the power
          of music. And so, the songbird and the silver knight lived happily
          ever after, their love a beacon of hope in a kingdom that had once
          teetered on the brink of despair. Their tale was sung for generations,
          a reminder that even in the darkest of times, love and music can
          conquer all.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default function PDFReader() {
  // eslint-disable-next-line no-unused-vars
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer style={styles.viewerSize}>
      <PDFDocument />
    </PDFViewer>
  );
}
