- <b>SPA</b> - Single-Page Application
  - ReactJS là một trong những thư viện tạo ta SPA
  - Được cho là cách tiếp cận hiện đại hơn
  - Không yêu cầu tải lại trang trong quá trình sử dụng
  - Nhanh hơn khi sử dụng
  - Phần lớn tài nguyên được tải trong lần đầu
  - Chỉ tải thêm dữ liệu mới khi cần
  - Có phần front-end riêng biệt
  - SEO: Không thân thiện với SEO như MPA
  - UX: Cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
  - Trải nghiệm trên thiết bị di động tốt hơn
  - Dễ dàng tái sử dụng code (component)
  - Bóc tách FE, BE, phát triển trong song, phát triển thêm mobile app dễ dàng
  - Phụ thuộc hoàn toàn vào JS
  - Giảm tải cho server
  - CSR - Client side rendering

- <b>MPA</b> - Multi-Page Application
  - Là cách tiếp cận cổ điển hơn
  - Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển sang...)
  - Chậm hơn khi sử dụng
  - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng
  - Front-end và back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án
  - Có thể không cần JS
  - Mọi request đều đẩy lên server
  - SSR - Server side rendering
- <b>document.createElement()</b> -> Node element
  - Object.assign(element.style, {
      color: 'blue,
      backgroundColor: '#333'
    })
  - document.appendChild()
- <b>React.createElement()</b> -> React element
  - React.createElement(type, props, children)
- <b>React-DOM</b>
  - ReactDOM.render(element, container, callback)
  - Render React elemnt -> DOM element -> UI
  - React-Native -> iOS, Android
- <b>JSX</b>
  - Javascript XML: hỗ trợ viết XML, HTML trong JS
  - XML: Extensible Markup Language
  - HTML là cú pháp mở rộng của XML
  - JSX không phải là `HTML, cần có JS -> Babel
  - React.Fragment: Wrapper
- <b>React element types</b>
  - string, function/class
  - Wrapper: Header, Content, Footer component
- <b>Props</b>
  - Object chứa các thuộc tính mô tả React element
  - React elements (~thẻ JSX)
    - Props giống như attribute của thẻ HTML
    - 2 prop class, for => classNam, htmlFor
    - Phải tuân theo quy ước có sẵn
  - React components (~function)
    - Props giống như đối số cho Component
    - Tự do đặt tên props
    - Đặt theo camelCase
    - *Có thể bao gồm dấu gạch ngang
  - Chú ý:
    - Prop "key" là prop đặc biệt
    - Props cơ bản là đối số của Component -> Props có thể là bất cứ kiểu dữ liệu gì
    - Sử dụng destructuring
- <b>Làm việc với JSX</b>
  - Xử lý DOM events
  - Tạo Component linh hoạt
    - Component do chúng ta tự định nghĩa phải viết in hoa ký tự đầu
      - Chọn component trong 1 object
    - Booleans, Null & Undedined không được render
    - Kết hợp toán tử logic để render theo điều khiển
  - Props trong JSX
    - < YourComponent
          propName1="String literals"
          propName2={expression}
    />
    - Props default to "true"
    - Spread/Rest props
    - Children prop
      - < YourComponent>String liternals</ YourComponent>
      - < YourComponent>{expression}</ YourComponent>
    - Render props
- <b>Tạo dự án với React + Webpack</b>
  - webpack is a module bundler
- <b>Create React App</b>
  - CRA: Set up a modern web app by running one command
- <b>NPM, NPX, YARN</b>
  - NPM - node package manager
    - Cài tuần tự từng thư viện
    - project scope
      - npm install (i) react react-dom -> dependencies
      - npm i --save-dave (-D) react react-dom -> devDependences
      - npm uninstall react react-dom
    - global scope
      - npm i --global (-g) create-react-app
      - npm uninstall -g create-react-app
  - NPX - NPM Package executor
    - run and execute packages without having to install them locally or globally
  - YARN - Yet Another Resource Negotiator
    - Cài song song nhiều thư viện
    - Cơ chế cache: lưu pkg vào thư mục tạm -> reinstall nhanh hơn
    - npm i -g yarn
    - Cú pháp so với npm: đa số thay npm bằng yarn
  - Lưu ý:
    - Luôn bật development server (npm start || yarn start)
- <b>Hooks</b>
  - useState
    - Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
    - Component được re-render sau khi `setState`
    - Initial state chỉ dùng cho lần đầu
    - Set state với callback? Trả về giá trị mới nhưng không render ngay
    - Initial state với callback? Lấy giá trị return của callback làm initial state
    - Set state là `thay thế` state bằng giá trị mới