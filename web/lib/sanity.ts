import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'x7biewak', // you can find this in sanity.json
  dataset: 'maruja-dataset', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});
