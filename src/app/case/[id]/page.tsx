interface Params {
    id: string; 
  }
  
  interface CasePageProps {
    params: Params;
  }


export default function CasePage({ params  }: CasePageProps) {
  const { id } = params;

}