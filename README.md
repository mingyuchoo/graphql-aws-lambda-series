# Apollo server for AWS Lambda

## 시작하기 전에

- AWS 계정이 있어야 합니다.
- S3 버켓을 만들고 `package.json`파일에 있는 `<bucket-name>` 부분을 생성한 S3 버켓이름으로 바꿉니다.

## 빌드 방법

- `yarn sam:verify` - `template.yml` 파일에 오류가 없는지 검증합니다.
- `yarn sam:package` - `template.yml`을 이용하여 `package.yml` 파일을 만듭니다.
- `yarn sam:deploy` - `package.yml` 을 이용하여 AWS 자원을 만듭니다.

## 테스트 방법

- insomnia를 다운로드 받아 `tests/insomnia` 디렉토리 아래에 있는 파일을 `import` 한 뒤 본인의 AWS access point `URI`를 바꿔서 실행하세요.
