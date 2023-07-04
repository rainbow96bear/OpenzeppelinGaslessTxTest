# OpenzeppelinGaslessTxTest

## front

1. useEffect를 통하여 forwarder와 nft contract를 설정

2. NFT용 img와 이름을 설정

3. nft 버튼을 눌러 minting실행
   - pinataUpload메서드를 실행
     - pinataUpload 메서드는 주어진 파일과 이름으로 back에 요청을 보내어 CID 반환
   - 받은 CID로 url 설정
   - buildRequest 메서드를 이용하여 request 생성
   - buildTypedData 메서드를 이용하여 sign을 위한 Data 생성
   - 생성한 Data를 통하여 전자 서명을 얻어 webhook으로 전달

## back

1. multer를 이용하여 pinata에 nft를 위한 json 저장

## defender

1. relayer 생성 script

   - script의 createRelay.js 파일을 이용하여 openzeppelin Defender에 relayer 생성
   - 실행 명령어 node scripts/createRelay.js
   - 생성되는 relayer는 EOA입니다.

2. autotask 생성 script
   - script의 createAutotask.js 파일을 이용하여 openzeppelin Defender에 Autotask 생성
   - 실행 명령어 node scripts/createAutotask.js

- 위의 방법처럼 script를 이용하지 않고 openzeppelin defender 사이트에서도 relayer와 autotask를 생성 가능합니다.

3. rollup을 이용하여 autotask runtime에 forwarderabi json 올리기
   - npm i rollup
     - rollup을 설치하여 모듈 파일을 단일 번들로 결합할 준비
   - src/index.ts파일에 autotask runtime에 올릴 code 작성
   - package.json에 script로 작성해둔 명령어를 통하여 번들 생성
   - dist/index.js의 내용을 복사하여 autotask에 등록
