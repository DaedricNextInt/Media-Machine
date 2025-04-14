// --- IPOD MODEL CODE ---

// Define some dimensions (adjust these!)
const ipodWidth = 5.5;
const ipodHeight = 10;
const ipodDepth = 1;
const screenWidth = 4;
const screenHeight = 3;
const wheelOuterRadius = 2;
const wheelInnerRadius = 0.8;
const buttonRadius = wheelInnerRadius * 0.8; // Center button slightly smaller than inner hole

// Use a Group to hold all parts of the iPod
const ipodGroup = new THREE.Group();
scene.add(ipodGroup); // Add the group to the scene

// --- 1. iPod Body ---
// For rounded edges, RoundedBoxGeometry is ideal, but it's in examples/jsm/geometries.
// Let's start with a basic BoxGeometry.
const bodyGeometry = new THREE.BoxGeometry(ipodWidth, ipodHeight, ipodDepth);

// Materials: Front (white/black) and Back (metallic)
// Need an array of materials for different faces of the box
// Indices: 0:right, 1:left, 2:top, 3:bottom, 4:front, 5:back
const frontMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, // White front (or 0x000000 for black)
    roughness: 0.6,
    metalness: 0.1
});
const backMaterial = new THREE.MeshStandardMaterial({
    color: 0xcccccc, // Silver-ish
    metalness: 0.9, // High metalness for chrome look
    roughness: 0.1  // Low roughness for shiny look
});
const edgeMaterial = new THREE.MeshStandardMaterial({ // Use front or back color for edges
    color: 0xffffff, // White edges (or 0x000000 for black)
    roughness: 0.6,
    metalness: 0.1
});

const bodyMaterials = [
    edgeMaterial,   // right
    edgeMaterial,   // left
    edgeMaterial,   // top
    edgeMaterial,   // bottom
    frontMaterial,  // front
    backMaterial    // back
];

const ipodBody = new THREE.Mesh(bodyGeometry, bodyMaterials);
ipodGroup.add(ipodBody); // Add body to the group

// --- 2. Screen ---
// A thin box or a plane slightly in front of the main body
const screenGeometry = new THREE.PlaneGeometry(screenWidth, screenHeight);
const screenMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000, // Simple black screen
    // --- OR --- Use a texture for a more realistic look:
    // map: new THREE.TextureLoader().load('path/to/your/ipod_screen_texture.jpg')
});
const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);

// Position the screen on the front face
screenMesh.position.z = ipodDepth / 2 + 0.01; // Slightly in front of the body's front face
screenMesh.position.y = (ipodHeight / 2) * 0.3; // Position it vertically (adjust factor)
ipodGroup.add(screenMesh);

// --- 3. Click Wheel ---
// Use a Group for the wheel components
const clickWheelGroup = new THREE.Group();
// Position the entire wheel group below the screen
clickWheelGroup.position.y = -(ipodHeight / 2) * 0.35; // Adjust vertical position
clickWheelGroup.position.z = ipodDepth / 2 + 0.01; // Slightly in front
ipodGroup.add(clickWheelGroup);

// a) Outer Ring
const wheelRingGeometry = new THREE.RingGeometry(
    wheelInnerRadius, // Inner radius
    wheelOuterRadius, // Outer radius
    32 // Segments (smoothness)
);
const wheelRingMaterial = new THREE.MeshStandardMaterial({
    color: 0xe0e0e0, // Light greyish color
    roughness: 0.7,
    // --- IMPORTANT --- For the button icons (Menu, Play, Fwd, Back):
    // You MUST create a texture image (e.g., a PNG with transparency)
    // showing the ring with the icons and apply it here.
    // map: new THREE.TextureLoader().load('path/to/your/click_wheel_texture.png'),
    // side: THREE.DoubleSide // Make sure texture is visible
});
const wheelRingMesh = new THREE.Mesh(wheelRingGeometry, wheelRingMaterial);
clickWheelGroup.add(wheelRingMesh);

// b) Center Button
const centerButtonGeometry = new THREE.CircleGeometry(
    buttonRadius, // Radius
    32 // Segments
);
const centerButtonMaterial = new THREE.MeshStandardMaterial({
    color: 0xf0f0f0, // Slightly different shade?
    roughness: 0.7
});
const centerButtonMesh = new THREE.Mesh(centerButtonGeometry, centerButtonMaterial);
// No need to change Z position relative to clickWheelGroup, it's already at the front
clickWheelGroup.add(centerButtonMesh);

// --- END IPOD MODEL CODE ---