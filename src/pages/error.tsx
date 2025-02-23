import Container from '@/components/ui/container';

export const Error: React.FC = () => {
  return (
    <Container>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Error
      </h1>
      <section>
        <h2 className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Something went wrong, try again later!
        </h2>
      </section>
    </Container>
  );
};
