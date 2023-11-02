import Modal from "../../modal/Modal";
import { Project } from "../projects.data";

interface ProjectModalProps {
  project?: Project;
  handleClose: () => void;
  // layoutId: string;
}

const ProjectModal = ({
  // layoutId,
  project,
  handleClose,
}: ProjectModalProps) => {
  return (
    <Modal handleClose={handleClose}>
      <p>{project?.title}</p>
      <p style={{ color: "black" }}>{project?.longDescription}</p>
    </Modal>
  );
};

export default ProjectModal;
