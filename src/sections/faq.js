import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: 'What is Henguage ?',
    contents: (
      <div>
        Henguage is an african language-learning platform that makes it possible for anyone to any african language taught by 150+ of the world’s best.
        Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, Henguage delivers a world class online learning experience. 
        Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'What is included in Henguage membership?',
    contents: (
      <div>
        Membership includes access to an incredible catalog of 150+ classes taught by the world’s best on cooking, leadership, photography, writing and more.
        Each class includes around 20 video lessons that are 10 minutes long on average, along with an in-depth workbook. You also get access to our smartphone 
        and TV apps, offline lessons, our members only newsletter, and our dynamic community of members around the world.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Where can I watch?',
    contents: (
      <div>
        With Henguage, you can learn and be inspired anytime, anywhere, including your smartphone, personal 
        computer, Apple TV, Amazon Fire TV, and Roku streaming media players. You can even download your favorite 
        lessons and watch on the plane or listen during your commute in audio-only mode.*
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Which classes are right for me?',
    contents: (
      <div>
        Henguage offers 150+ classes across a variety of categories, including business and leadership, 
        photography, cooking, writing, acting, music, sports and more. Every class has been designed to be accessible 
        for people with little to no experience and advanced students alike. With new classes launching regulary, 
        you can learn practical skills, ignite new passions, and get everyday wisdom.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    backgroundColor: '#000',
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
      color: '#f5f5f5 !important',
    },
  },
};
