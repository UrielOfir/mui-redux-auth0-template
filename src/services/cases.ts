export const getCases = async () => {
  const response = await fetch('http://127.0.0.1:5000/Case/GetMyCases')
  const cases = await response.json()
  console.log(cases)
  return cases
}