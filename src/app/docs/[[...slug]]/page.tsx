export default function Docs({
  params
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h2>
        Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}
        <div>/docs/esg-dgrg/sdgfg-terg</div>
      </h2>
    );
  } else if (params.slug?.length === 1) {
    return (
      <h2>
        Viewing Docs for feature {params.slug[0]}
        <div>/docs/esg-dgrg</div>
      </h2>
    );
  }

  return (
    <div>
      <h2>Docs home page</h2>
      <div>/docs</div>
      <div>Make sure to double the square bracket</div>
    </div>
  );
}
