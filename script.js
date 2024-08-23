const displayTable = document.getElementById('displayTable');

window.addEventListener('keydown', (event) => {
  displayTable.innerHTML = `
  <table class="event-table">
      <thead>
          <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>KEY</td>
              <td>${event.key === ' ' ? 'Space' : event.key}</td>
              <td>The actual key that was pressed</td>
          </tr>
          <tr>
              <td>KEYCODE</td>
              <td>${event.keyCode}</td>
              <td>The numeric code representing the key</td>
          </tr>
          <tr>
              <td>CODE</td>
              <td>${event.code}</td>
              <td>The physical key on the keyboard (e.g., "KeyA", "Enter")</td>
          </tr>
          <tr>
              <td>ALT KEY</td>
              <td>${event.altKey}</td>
              <td>Whether the "Alt" key was pressed</td>
          </tr>
          <tr>
              <td>CTRL KEY</td>
              <td>${event.ctrlKey}</td>
              <td>Whether the "Ctrl" key was pressed</td>
          </tr>
          <tr>
              <td>SHIFT KEY</td>
              <td>${event.shiftKey}</td>
              <td>Whether the "Shift" key was pressed</td>
          </tr>
          <tr>
              <td>META KEY</td>
              <td>${event.metaKey}</td>
              <td>Whether the "Meta" key (e.g., Command on Mac) was pressed</td>
          </tr>
          <tr>
              <td>REPEAT</td>
              <td>${event.repeat}</td>
              <td>Whether the key is being held down and repeating</td>
          </tr>
          <tr>
              <td>TIMESTAMP</td>
              <td>${event.timeStamp}</td>
              <td>The time when the event occurred (in milliseconds since the page loaded)</td>
          </tr>
          <tr>
              <td>LOCATION</td>
              <td>${event.location}</td>
              <td>The location of the key on the keyboard (e.g., standard, left, right, numpad)</td>
          </tr>
      </tbody>
  </table>
`;

})