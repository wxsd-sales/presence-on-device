
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Presense Lookup on RoomOS Devices</h2>

  <p align="center">
    Webex user presence lookup & SIPURI Protocol Handler dialing
    <br />
    <a href="https://github.com/WXSD-Sales/PresenceOnDevice"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wxsd-sales.github.io/PresenceOnDevice/">View Demo</a>
    ·
    <a href="https://github.com/WXSD-Sales/PresenceOnDevice/issues">Report Bug</a>
    ·
    <a href="https://github.com/WXSD-Sales/PresenceOnDevice/issues">Request Feature</a>
  </p>
</p>

 *_Everything included is for demo and Proof of Concept purposes only. Your use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex usecases, but are not Official Cisco Webex Branded demos._

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#url-parameters">URL Parameters</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![production-screenshot](assets/images/presence-on-device.png)](link)

In this demo we show how to subscribe to others and set self statuses using webex JS SDK.

### Dependencies

- [Webex Browser SDK](https://github.com/webex/webex-js-sdk)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Webex Integration](https://developer.webex.com/docs/integrations) with the following scopes:
`spark:people_read`

### URL Parameters
This app accepts the following URL parameters:
| Parameter  | Required | Description | Default
| ------------- | ------------- | ------------- | ------------- |
| mode | optional | retrieve live user presence data in two ways: to Poll REST API with give interval AKA 'polling' or Subscribe to Webex internal webSocket connection AKA 'pubSub' | polling
| interval | optional | Given interval in milliseconds to poll REST API if mode is set to 'polling' | 5000
<!-- GETTING STARTED -->
å
## Getting Started

If you would like to contribute to our source code and to improve our demo, please follow the steps mentioned below:

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/WXSD-Sales/PresenceOnDevice.git
   ```
2. We use NVM to manage our node.js machine versioning. You can learn more about NVM [here](https://github.com/nvm-sh/nvm)
   ```sh
   nvm use
   ```
3. Install the packages via [Yarn](https://classic.yarnpkg.com/en/)
   ```sh
   yarn
   ```
4. Start the server
   ```sh
   yarn start
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch in your forked repo (`git checkout -b myrepo/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin myrepo/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

wxsd@cisco.external.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/WXSD-Sales/PresenceOnDevice.svg?style=for-the-badge
[contributors-url]: https://github.com/WXSD-Sales/PresenceOnDevice/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/WXSD-Sales/PresenceOnDevice.svg?style=for-the-badge
[forks-url]: https://github.com/WXSD-Sales/PresenceOnDevice/network/members
[stars-shield]: https://img.shields.io/github/stars/WXSD-Sales/PresenceOnDevice.svg?style=for-the-badge
[stars-url]: https://github.com/WXSD-Sales/PresenceOnDevice/stargazers
[issues-shield]: https://img.shields.io/github/issues/WXSD-Sales/PresenceOnDevice.svg?style=for-the-badge
[issues-url]: https://github.com/WXSD-Sales/PresenceOnDevice/issues
[license-shield]: https://img.shields.io/github/license/WXSD-Sales/PresenceOnDevice.svg?style=for-the-badge
[license-url]: https://github.com/WXSD-Sales/PresenceOnDevice/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/arash-koushkebaghi-9b1701a4/
[product-screenshot]: assets/images/presence.png
