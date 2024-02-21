import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      // GET 요청에 대한 처리
      try {
        // 데이터를 가져오는 비동기 작업 수행
        const data = await getDataFromDatabase();
  
        // 데이터를 클라이언트로 응답
        res.status(200).json(data);
      } catch (error) {
        // 오류가 발생한 경우 클라이언트에 오류 응답
        res.status(500).json({ message: 'Internal server error' });
      }
    } else if (req.method === 'POST') {
      // POST 요청에 대한 처리
      try {
        // 클라이언트로부터 전송된 데이터를 파싱
        const { username, email } = req.body;
  
        // 데이터베이스에 새로운 사용자 추가
        await addUserToDatabase(username, email);
  
        // 사용자 추가가 성공한 경우 응답
        res.status(201).json({ message: 'User added successfully' });
      } catch (error) {
        // 오류가 발생한 경우 클라이언트에 오류 응답
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      // GET 또는 POST 요청 외의 요청에 대한 처리
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  
// 데이터베이스로부터 데이터를 가져오는 비동기 함수
async function getDataFromDatabase() {
// 여기서는 가짜 데이터를 반환하는 것으로 가정
return { name: 'SeungSuRa' };
}

async function addUserToDatabase(username: string, email: string) {
    // 여기서는 가짜 데이터베이스 작업을 수행하는 것으로 가정
}